import React from 'react'
import Marquee from "react-fast-marquee";
import { MapPin } from 'lucide-react';
import { PhoneCall } from 'lucide-react';

export default function NavMarquee() {
  return (
    <Marquee>
        Welcome to Anjani Sweets || For more exciting offers visit out store || <MapPin  className="inline w-4 h-5 mx-1"  />  Y-17, 17A, Gate Bazar, Kharagpur, West Bengal 721301 || <PhoneCall  className="inline w-4 h-4 mx-1" />  9932246623
    </Marquee>
  )
}
