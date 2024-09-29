import React from 'react'
import Editor from '@components/editor/Editor'
import Header from '@components/Header'
import { SignedOut, SignInButton, SignedIn, UserButton } from '@cler/nextjs'

const Document = () => {
  return (
    <>
      <Header>
        <div className='flex w-fit items-center justify-center gap-2'>
          <p className='document-title'>This is a fake document title</p>
        </div>
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
      </Header>
      <Editor />
    </>

  )
}

export default Document