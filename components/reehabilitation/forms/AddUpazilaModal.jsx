"use client";

const AddUpazilaModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-[90%] max-w-[420px] rounded-xl border border-slate-200 bg-white p-5 shadow-2xl">
        <form>
          <div className="grid gap-4">
            {/* Select */}
            <div className="w-full">
              <label
                htmlFor="ptk"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Select Option
              </label>

              <select
                name="ptk"
                id="ptk"
                defaultValue=""
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              >
                <option value="" disabled>
                  Select one
                </option>

                <option value="option-1">Option 1</option>
                <option value="option-2">Option 2</option>
              </select>
            </div>

            {/* Number Input */}
            <div className="w-full">
              <label
                htmlFor="number"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Enter Number
              </label>

              <input
                id="number"
                name="number"
                type="number"
                placeholder="Enter number"
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-5 grid w-full grid-cols-2 gap-3">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUpazilaModal;
