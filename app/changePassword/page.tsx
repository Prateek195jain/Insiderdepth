
import ChangePasswordForm from "@/features/changepasswordForm/ChangePasswordForm";

export default function ChangePasswordPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
     
      <div className="w-full max-w-[474px] p-8 space-y-6 bg-gray-800  shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">Change password</h2>
        <ChangePasswordForm />
      </div>
    </div>
  );
}