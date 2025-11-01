import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Supabase integration has been removed from the client.
    // Replace this with a call to your backend auth API or other auth provider.
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Authentication disabled",
        description:
          "Sign in with Supabase was removed. Please use the server auth or configure an external provider.",
      });
      navigate("/");
    }, 500);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Sign in</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 glass-card rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 glass-card rounded-lg"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary-glass"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
          <Link to="/register" className="text-sm text-primary underline">
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
