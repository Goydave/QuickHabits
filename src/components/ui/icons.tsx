import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-message-circle", props.className)}
      {...props}
    >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.78 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.51 14.33c-.27.4-1.36.35-1.57.33-.21-.02-.46-.08-1.07-.38s-1.12-1.04-1.6-1.74c-.48-.7-.95-1.57-.95-1.76 0-.18.18-.28.36-.45l.4-.41c.18-.18.23-.36.3-.54.07-.18.04-.36 0-.54l-.45-1.08c-.14-.36-.27-.3-.4-.3h-.4c-.14 0-.36.04-.54.22s-.68.68-.68 1.62c0 .94.7 1.88 1.38 2.56.68.68 1.57 1.32 2.7 1.8.94.39 1.43.49 1.7.49.27 0 .8-.14 1.14-.84s.48-1.57.4-1.8c-.07-.22-.27-.36-.45-.4z"/>
    </svg>
);