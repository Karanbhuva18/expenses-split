import { SignUpForm } from "@/components/signup/signup-form";

type Props = {};

const Register = (props: Props) => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SignUpForm />
      </div>
    </div>
  );
};

export default Register;
