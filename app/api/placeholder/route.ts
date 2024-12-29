import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import React from 'react'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const width = searchParams.get('width') ?? '400'
  const height = searchParams.get('height') ?? '600'

  return new ImageResponse(
    React.createElement(
      'div',
      {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 24,
          background: '#f4f4f4',
          color: '#888',
        },
      },
      `${width}x${height}`
    ),
    {
      width: Number(width),
      height: Number(height),
    }
  )
}
