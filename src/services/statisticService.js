const Score = require("../models/score.model");

const getSubjectStatistics = async (subject) => {
    const result = await Score.aggregate([
        {
            $match: {
                [subject]: {
                    $ne: null
                }
            }
        },
        {
            $group: {
                _id: null,
                greaterEqual8: {
                    $sum: {
                        $cond: [
                            {
                                $gte: [`$${subject}`, 8]
                            },
                            1,
                            0
                        ]
                    }
                },
                from6To8: {
                    $sum: {
                        $cond: [
                            {
                                $and: [
                                    {
                                        $gte: [`$${subject}`, 6]
                                    },
                                    {
                                        $lt: [`$${subject}`, 8]
                                    }
                                ]
                            },
                            1,
                            0
                        ]
                    }
                },
                from4To6: {
                    $sum: {
                        $cond: [
                            {
                                $and: [
                                    {
                                        $gte: [`$${subject}`, 4]
                                    },
                                    {
                                        $lt: [`$${subject}`, 6]
                                    }
                                ]
                            },
                            1,
                            0
                        ]
                    }
                },
                lowerThan4: {
                    $sum: {
                        $cond: [
                            {
                                $lt: [`$${subject}`, 4]
                            },
                            1,
                            0
                        ]
                    }
                },
            }
        },
        {
            $project: {
                _id: 0,
                subject: subject,
                greaterEqual8: 1,
                from6To8: 1,
                from4To6: 1,
                lowerThan4: 1
            }
        }
    ])

    return {
        subject,
        ...result[0]
    };

    //C2: 
    // const greaterEqual8 = await Score.countDocuments({
    //     [subject]: { $gte: 8 }
    // });

    // const from6To8 = await Score.countDocuments({
    //     [subject]: {
    //         $gte: 6,
    //         $lt: 8
    //     }
    // });

    // const from4To6 = await Score.countDocuments({
    //     [subject]: {
    //         $gte: 4,
    //         $lt: 6
    //     }
    // });

    // const lowerThan4 = await Score.countDocuments({
    //     [subject]: {
    //         $lt: 4
    //     }
    // });

    // return {
    //     subject: subject,
    //     greaterEqual8: greaterEqual8,
    //     from6To8: from6To8,
    //     from4To6: from4To6,
    //     lowerThan4: lowerThan4
    // }
};

//out of memory
// const getTop10GroupA = async() => {
//     const students = await Score.find(
//         {
//             toan: { $ne: null },
//             vat_li: { $ne: null },
//             hoa_hoc: { $ne: null }
//         },
//         {
//             _id: 0,
//             sbd: 1,
//             toan: 1,
//             vat_li: 1,
//             hoa_hoc: 1
//         }
//     ).lean();

//     const result = students
//         .map(student => ({
//             ...student,
//             total: student.toan + student.vat_li + student.hoa_hoc
//         }))
//         .sort((a, b) => b.total - a.total)
//         .slice(0, 10);

//     return result;
// }

const getTop10GroupA = async () => {
    return await Score.aggregate([
        {
            $match: {
                toan: { $ne: null },
                vat_li: { $ne: null },
                hoa_hoc: { $ne: null }
            }
        },
        {
            $addFields: {
                total: {
                    $add: ["$toan", "$vat_li", "$hoa_hoc"]
                }
            }
        },
        {
            $sort: {
                total: -1
            }
        },
        {
            $limit: 10
        },
        {
            $project: {
                _id: 0,
                sbd: 1,
                toan: 1,
                vat_li: 1,
                hoa_hoc: 1,
                total: 1
            }
        }
    ]);
};

module.exports = { getSubjectStatistics, getTop10GroupA };