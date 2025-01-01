import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'

export default function Home() {
  return (
    <Button disabled>
      <LoaderCircle
        key={1}
        aria-hidden="true"
        className="-ms-1 me-2 animate-spin"
        size={16}
        strokeWidth={2}
        onClick={() => {}}
      />
      Button
    </Button>
  )
}
