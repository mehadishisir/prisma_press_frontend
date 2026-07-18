"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'

export const LoginForm = () => {
  return (
    <form className="space-y-4">
       <Card>
          <Input name="email" type="email" placeholder="Enter Your Email" required />
            <Input name="password" type="password" placeholder="Enter Your Password" required />
            <Button type="submit">
                Submit
                </Button>
       </Card>
        </form>
  )
}
