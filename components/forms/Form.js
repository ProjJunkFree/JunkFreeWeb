import { Input } from "@/components/forms";
import { Spinner } from "@/components/common";

export default function Form({
  config,
  onSubmission,
  onChange,
  isLoading,
  btnText,
}) {
  return (
    <form className="space-y-6" method="POST" onSubmit={onSubmission}>
      {config.map((input) => (
        <Input
          key={input.labelId}
          labelId={input.labelId}
          link={input.link}
          type={input.type}
          onChange={onChange}
          value={input.value}
          required={input.required}
        >
          {input.labelText}
        </Input>
      ))}

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-[#04AF70] px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1E374D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E374D]"
          // style={{ backgroundColor: "#04AF70" }}
          disabled={isLoading}
        >
          {isLoading ? <Spinner sm /> : `${btnText}`}
        </button>
      </div>
    </form>
  );
}
