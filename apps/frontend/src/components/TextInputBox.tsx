export type TextInputBoxProps = {
  label: string;
  value: string;
  onChange(v: string): void;
};

export function TextInputBox({ label, value, onChange }: TextInputBoxProps) {
  return (
    <div className="form-control w-full ">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="text"
        className="input-bordered input w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
