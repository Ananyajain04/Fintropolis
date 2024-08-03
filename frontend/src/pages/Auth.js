import {z} from 'zod';
import {useForm} from "react-hook-form";

export const registerSchema=z.object({
    email:z.string().email(),
    name:z.string().min().max(256),
    age:z.string().min().max(256),
    Adress:z.string().min().max(256),
    name:z.string().min().max(256),
    goals:z.string().min().max(256),
    expenditure:z.string().min().max(256),
    Assets:z.string().min().max(256),
    liabilities:z.string().min().max(256),
  })