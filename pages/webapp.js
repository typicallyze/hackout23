import { useEffect, useState, useRef } from 'react'
import axios from "axios"

const KEY=process.env.OPENAI_KEY
const model = "whisper-1"