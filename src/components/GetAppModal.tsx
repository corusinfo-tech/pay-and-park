import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface GetAppModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GetAppModal: React.FC<GetAppModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Download Our App</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center space-y-4">
          {/* QR Code (optional) */}
          <img
            src="/assets/qr-code.png"
            alt="QR Code"
            className="w-32 h-32"
          />

          {/* Download Buttons */}
          <div className="flex flex-col gap-2 w-full">
            <a
              href="https://play.google.com/store/apps/details?id=your-app-id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/google-play-badge.png"
                alt="Google Play"
                className="h-12 mx-auto"
              />
            </a>
            <a
              href="https://apps.apple.com/app/your-app-id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/app-store-badge.png"
                alt="App Store"
                className="h-12 mx-auto"
              />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GetAppModal;
