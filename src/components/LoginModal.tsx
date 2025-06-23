
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, UserPlus, LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LoginModalProps {
  children: React.ReactNode;
}

const LoginModal = ({ children }: LoginModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"select" | "login" | "signup">("select");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email: formData.email });
    toast({
      title: "Login Successful",
      description: `Welcome back, ${formData.email}!`
    });
    setIsOpen(false);
    resetForm();
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }
    console.log("Signup attempt:", { email: formData.email, name: formData.name });
    toast({
      title: "Account Created",
      description: `Welcome to TechHome, ${formData.name}!`
    });
    setIsOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      name: ""
    });
    setMode("select");
  };

  const handleClose = () => {
    setIsOpen(false);
    resetForm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {mode === "select" && "Welcome to TechHome"}
            {mode === "login" && "Sign In"}
            {mode === "signup" && "Create Account"}
          </DialogTitle>
        </DialogHeader>

        {mode === "select" && (
          <div className="space-y-4">
            <p className="text-gray-600 text-center">Choose an option to continue</p>
            <div className="space-y-3">
              <Button
                onClick={() => setMode("login")}
                className="w-full flex items-center space-x-2"
                variant="outline"
              >
                <User className="h-4 w-4" />
                <span>Existing User - Sign In</span>
              </Button>
              <Button
                onClick={() => setMode("signup")}
                className="w-full flex items-center space-x-2"
              >
                <UserPlus className="h-4 w-4" />
                <span>New User - Create Account</span>
              </Button>
            </div>
          </div>
        )}

        {mode === "login" && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex space-x-2">
              <Button type="submit" className="flex-1">
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button type="button" variant="outline" onClick={() => setMode("select")}>
                Back
              </Button>
            </div>
          </form>
        )}

        {mode === "signup" && (
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a password"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                required
              />
            </div>
            <div className="flex space-x-2">
              <Button type="submit" className="flex-1">
                <UserPlus className="h-4 w-4 mr-2" />
                Create Account
              </Button>
              <Button type="button" variant="outline" onClick={() => setMode("select")}>
                Back
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
