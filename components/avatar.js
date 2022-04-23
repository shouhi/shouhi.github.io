import Image from 'next/image'
import {
    chakra
  } from '@chakra-ui/react'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
  })
  

export const MyImage = () => (
    <ProfileImage
        src="/images/shouhi.png"
        alt="Profile image"
        borderRadius='full'
        width="100%"
        height="100%"
    />
)
    
 