import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const URL = "https://u0ka8ohi.api.sanity.io/v2026-03-25/data/query/production?query=*%5B_type+%3D%3D+%22portfolio%22%5D%5B0%5D&perspective=published"
// export const URL = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/${process.env.SANITY_VERSION}/data/query/production?query=*%5B_type+%3D%3D+%22portfolio%22%5D%5B0%5D&perspective=published`

const STORAGE_TOKEN = 'portfolio_data'
const EXPIARY_TIME = 1000 * 60 * 60 // 1 hour

export async function PortfolioData() {

  const cached = localStorage.getItem(STORAGE_TOKEN)
  if (cached) {
    const parse = JSON.parse(cached)
    const now = Date.now()
    if (now - parse.timestamp < EXPIARY_TIME) {
      return true
    }
  }

  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const result = await response.json()
    if (result?.result) {
      localStorage.setItem(
        STORAGE_TOKEN,
        JSON.stringify({
          result: result?.result,
          timestamp: Date.now()
        })
      )
      return true
    } else {
      console.log("Failed to get the result", result)
      return false
    }
  }
  catch (error) {
    console.log("Fetch data error", error)
    return false
  }
}

export const getResponse = () => {
  const result = localStorage.getItem(STORAGE_TOKEN)
  if (result) {
    return JSON.parse(result)?.result
  } else {
    return null
  }
}