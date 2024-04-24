import { Spinner } from "@/components/common";
import Image from "next/image";
export default function ProfileInfo({ config }) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {config.map(({ label, value }) => (
        <li key={label} className="flex justify-between gap-x-6 py-5">
          <div>
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {label}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {value || value === "" || <Spinner sm />}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
