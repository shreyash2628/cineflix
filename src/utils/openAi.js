import OpenAI from "openai";
import { GptKey } from "./constants";

const openai = new OpenAI({
    apiKey:GptKey,
    dangerouslyAllowBrowser:true,
})

export default openai;