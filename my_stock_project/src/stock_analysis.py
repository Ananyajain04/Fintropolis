import time
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import quandl
from sklearn.preprocessing import MinMaxScaler
from keras.models import load_model

stock_symbols = [
    'AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA', 
    'FB', 'NFLX', 'NVDA', 'V', 'JPM', 
    'JNJ', 'WMT', 'PG', 'DIS', 'MA'
]

def preprocess_data(data):
    scaler = MinMaxScaler(feature_range=(0,1))
    data_array = scaler.fit_transform(data)
    
    x, y = [], []
    for i in range(100, data_array.shape[0]):
        x.append(data_array[i-100:i])
        y.append(data_array[i, 0])
        
    return np.array(x), np.array(y), scaler

def predict_stock_prices(model, stock_data):
    x, _, scaler = preprocess_data(stock_data)
    predictions = model.predict(x)
    return scaler.inverse_transform(predictions)


model = load_model('./models/keras_model.h5')


predictions = {}
for symbol in stock_symbols:
    data = quandl.get(f"WIKI/{symbol}")
    data_training = pd.DataFrame(data['Close'][0:int(len(data)*0.70)])
    data_testing = pd.DataFrame(data['Close'][int(len(data)*0.70):])
    
    past100 = data_training.tail(100)
    final_data = pd.concat([past100, data_testing], ignore_index=True)
    
    predicted_prices = predict_stock_prices(model, final_data)
    predictions[symbol] = predicted_prices

    time.sleep(30)  

def calculate_future_returns(current_prices, predictions):
    returns = {}
    for symbol in predictions:
        current_price = current_prices[symbol].values[-1][0] 
        future_price = predictions[symbol][-1][0] 
        returns[symbol] = (future_price - current_price) / current_price
    return returns

def recommend_stocks(returns, top_n=3):  
    sorted_stocks = sorted(returns.items(), key=lambda x: x[1], reverse=True)
    return sorted_stocks[:top_n]


current_prices = {symbol: pd.DataFrame(quandl.get(f"WIKI/{symbol}")['Close']) for symbol in stock_symbols}
returns = calculate_future_returns(current_prices, predictions)
top_recommendations = recommend_stocks(returns)

print("Top Stock Recommendations:")
for stock in top_recommendations:
    print(f"Stock: {stock[0]}")


plt.figure(figsize=(16,8))
for symbol in stock_symbols:
    plt.plot(predictions[symbol], label=f'{symbol} Predicted')
plt.xlabel('Time')
plt.ylabel('Price')
plt.legend()
plt.show()
