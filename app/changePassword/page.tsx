import ChangePasswordForm from "@/features/changepasswordForm/ChangePasswordForm";

export default function ChangePasswordPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">Change password</h2>
        <ChangePasswordForm />
      </div>
    </div>
  );
}