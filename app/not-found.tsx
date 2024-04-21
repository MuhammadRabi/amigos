import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
export default function NotFound() {
  return (
    <section className="my-24 min-h-[55vh] w-full mx-auto xl:w-3/4">
      <div className="container">
        <Alert className="bg-white font-semibold text-charcoal">
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription className="my-4">
            The page you requested is not available!
          </AlertDescription>
          <Button>
            <Link href="/">Return Home</Link>
          </Button>
        </Alert>
      </div>
    </section>
  )
}
