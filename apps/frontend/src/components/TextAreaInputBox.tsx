export type TextAreaInputBoxProps = {
  label: string;
  value: string;
  onChange(v: string): void;
};

export function TextAreaInputBox({ label, value, onChange }: TextAreaInputBoxProps) {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        className="input-bordered textarea h-96"
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
