const fs = require("fs");
const csv = require("csv-parser");

const parseCSV = (filePath) => {
    return new Promise((resolve, reject) => {
        const results = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on("data", (data) => {
                results.push({
                    sbd: data.sbd,
                    toan: data.toan ? Number(data.toan) : null,
                    ngu_van: data.ngu_van ? Number(data.ngu_van) : null,
                    ngoai_ngu: data.ngoai_ngu ? Number(data.ngoai_ngu) : null,
                    vat_li: data.vat_li ? Number(data.vat_li) : null,
                    hoa_hoc: data.hoa_hoc ? Number(data.hoa_hoc) : null,
                    sinh_hoc: data.sinh_hoc ? Number(data.sinh_hoc) : null,
                    lich_su: data.lich_su ? Number(data.lich_su) : null,
                    dia_li: data.dia_li ? Number(data.dia_li) : null,
                    gdcd: data.gdcd ? Number(data.gdcd) : null,
                    ma_ngoai_ngu: data.ma_ngoai_ngu || null,
                });
            })
            .on("end", () => resolve(results))
            .on("error", reject);
    });
};

module.exports = parseCSV;