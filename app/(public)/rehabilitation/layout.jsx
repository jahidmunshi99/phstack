import RehabilitationProvider from "../../../provider/reehabilitationProvider";

const RehabilitationLayout = ({ children }) => {
  return (
    <>
      <RehabilitationProvider>
        <div className="min-h-screen bg-slate-100 py-2">
          <div className="mx-auto space-y-8 px-2">
            {/* Header */}
            {children}
          </div>
        </div>
      </RehabilitationProvider>
    </>
  );
};

export default RehabilitationLayout;
