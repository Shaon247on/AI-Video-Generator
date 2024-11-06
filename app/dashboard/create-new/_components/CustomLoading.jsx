import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from "next/image";


const CustomLoading = ({ loading }) => {
    return (
        <AlertDialog open={loading}>
            <AlertDialogTitle></AlertDialogTitle>
            <AlertDialogDescription>
                <AlertDialogContent>
                    <div className="flex items-center gap-3 justify-center my-6">
                        <Image src={'/loading.gif'} alt="loading" width={40} height={40} />
                        <h1>Loading Text.....</h1>
                    </div>
                </AlertDialogContent>
            </AlertDialogDescription>
        </AlertDialog>

    );
};

export default CustomLoading;