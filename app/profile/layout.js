import { RequiredAuth } from "@/components/utils";

export default function Layout({ children }) {
  return <RequiredAuth>{children}</RequiredAuth>;
}
