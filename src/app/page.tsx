import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function JudgeSignIn() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F1628] to-[#090F1D] flex items-center justify-center p-8 lg:p-16">
      <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left side - Sign in form */}
        <div className="space-y-8 lg:mx-0">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-white text-xl font-bold tracking-tight">UBC</span>
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="#1a2332"
                  stroke="#1a2332"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="#1a2332"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="#1a2332"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-white text-xl font-bold tracking-tight">BIZTECH</span>
          </div>

          {/* Heading and description */}
          <div className="space-y-3">
            <h1 className="text-white text-4xl font-bold text-balance">Sign in as a judge</h1>
            <p className="text-[#8697BF] text-base leading-relaxed">
              Welcome to [EventName]! Thanks for volunteering to judge our competition. Please enter the email you used
              to register.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-white text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                className="bg-[#12192B] border-[#52689B] text-white placeholder:text-gray-500 h-12 focus-visible:ring-[#52689B]"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-12 bg-white text-[#1a2332] hover:bg-gray-100 font-medium text-base"
            >
              Sign in
            </Button>
          </form>
        </div>

        {/* Right side - Image collage */}
        <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/auth-img.png"
              alt="ProductX competition event showing students presenting and judging"
              height={1920}
              width={1080}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
