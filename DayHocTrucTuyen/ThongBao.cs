//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DayHocTrucTuyen
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public partial class ThongBao
    {
        public string Ma_TB { get; set; }
        public string Ma_ND { get; set; }
        public string Tieu_De { get; set; }
        public string Noi_Dung { get; set; }
        public System.DateTime Thoi_Gian { get; set; }
        public bool Trang_Thai { get; set; }
        public string Lien_Ket { get; set; }
    
        public virtual NguoiDung NguoiDung { get; set; }

        DayHocTrucTuyenEntities db = new DayHocTrucTuyenEntities();

        public string setMa(string maND)
        {
            var tb = db.ThongBaos.Where(x => x.Ma_ND == maND);
            if (tb.Count() == 0) return "00001";

            string ma = Convert.ToString(100000 + tb.Count() + 1).Substring(1);
            return ma;
        }
        public List<ThongBao> getAllThongBao(string maND)
        {
            var tb = db.ThongBaos.Where(x => x.Ma_ND == maND).OrderByDescending(x => x.Thoi_Gian).ToList();
            return tb;
        }
        public List<ThongBao> getThongBaoChuaXem(string maND)
        {
            var tb = db.ThongBaos.Where(x => x.Ma_ND == maND && x.Trang_Thai == false).OrderByDescending(x => x.Thoi_Gian).ToList();
            return tb;
        }
        public List<ThongBao> getThongBaoDaXem(string maND)
        {
            var tb = db.ThongBaos.Where(x => x.Ma_ND == maND && x.Trang_Thai == true).OrderByDescending(x => x.Thoi_Gian).ToList();
            return tb;
        }
        public int getSLThongBao(string maND)
        {
            return db.ThongBaos.Where(x => x.Ma_ND == maND).Count();
        }
        public int getSLThongBaoChuaXem(string maND)
        {
            return db.ThongBaos.Where(x => x.Ma_ND == maND && x.Trang_Thai == false).Count();
        }
        public int getSLThongBaoDaXem(string maND)
        {
            return db.ThongBaos.Where(x => x.Ma_ND == maND && x.Trang_Thai == true).Count();
        }
    }
}