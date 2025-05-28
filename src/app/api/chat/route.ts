import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    console.log('API Key exists:', !!process.env.OPENAI_API_KEY)
    
    const { message } = await request.json()
    console.log('Received message:', message)

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key not found')
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      )
    }

    console.log('Calling OpenAI API...')
    
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 500,
    })

    const responseContent = completion.choices[0]?.message?.content || 'No response'
    console.log('OpenAI response:', responseContent)

    return NextResponse.json({
      response: responseContent
    })

  } catch (error) {
    console.error('Detailed error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to generate response',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}