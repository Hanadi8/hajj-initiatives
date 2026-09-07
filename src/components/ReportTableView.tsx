import { ReportTable } from "@/types";

export function ReportTableView({ table }: { table: ReportTable }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="bg-primary px-5 py-3">
        <h3 className="text-sm font-bold text-white md:text-base">{table.title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="bg-offwhite">
              {table.columns.map((col) => (
                <th key={col} scope="col" className="whitespace-nowrap border-b border-border px-4 py-3 text-right font-bold text-text">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i} className="border-b border-border last:border-0 even:bg-offwhite/40">
                {table.columns.map((col) => (
                  <td key={col} className="px-4 py-3 text-text-muted">
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
