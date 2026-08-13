const RehabilitationBasicInfo = ({ items }) => {
  const totalAllotements =
    items.ingredients_per_person.reduce(
      (total, item) => total + item.price,
      0,
    ) * items.total_beneficiary;
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      {/* GO Number */}
      <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-3 transition hover:border-slate-300 hover:bg-slate-50">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
          <span className="shrink-0 text-sm font-semibold text-slate-600">
            Go No.
          </span>

          <span className="break-all text-sm font-medium text-slate-800">
            {items?.go_no}
          </span>
        </div>
      </div>

      {/* GO Date */}
      <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-3 transition hover:border-slate-300 hover:bg-slate-50">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
          <span className="shrink-0 text-sm font-semibold text-slate-600">
            Go Date
          </span>

          <span className="text-sm font-medium text-slate-800">
            {items?.go_date}
          </span>
        </div>
      </div>

      {/* Program Name */}
      <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-3 md:col-span-2">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
          <span className="shrink-0 text-sm font-semibold text-slate-600">
            কর্মসূচীর নাম:
          </span>

          <span className="text-sm font-medium text-slate-800">
            {items?.title}
          </span>
        </div>
      </div>

      {/* Beneficiary */}
      <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-3 transition hover:border-slate-300 hover:bg-slate-50">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
          <span className="shrink-0 text-sm font-semibold text-slate-600">
            উপকারভোগী সংখ্যা:
          </span>

          <span className="text-sm font-semibold text-slate-800">
            {items?.total_beneficiary}
          </span>
        </div>
      </div>

      {/* Total Allocation */}

      <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-3 transition hover:border-slate-300 hover:bg-slate-50">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
          <span className="shrink-0 text-sm font-semibold text-slate-600">
            মোট বরাদ্দ:
          </span>

          <span className="text-sm font-semibold text-emerald-700">
            {totalAllotements}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RehabilitationBasicInfo;
