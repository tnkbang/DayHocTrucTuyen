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
    using System.Security.Cryptography;
    using System.Text;

    public partial class PhongThi
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public PhongThi()
        {
            this.BiCamThis = new HashSet<BiCamThi>();
            this.CauHoiBaoMats = new HashSet<CauHoiBaoMat>();
            this.CauHoiThis = new HashSet<CauHoiThi>();
            this.ThoiGianLamBais = new HashSet<ThoiGianLamBai>();
        }
    
        public string Ma_Phong { get; set; }
        public string Ma_Lop { get; set; }
        public string Ten_Phong { get; set; }
        public System.DateTime Ngay_Tao { get; set; }
        public string Mat_Khau { get; set; }
        public System.DateTime Ngay_Mo { get; set; }
        public System.DateTime Ngay_Dong { get; set; }
        public int Luot_Thi { get; set; }
        public bool Xac_Thuc { get; set; }
        public bool Xem_Lai { get; set; }
        public int Thoi_Luong { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BiCamThi> BiCamThis { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CauHoiBaoMat> CauHoiBaoMats { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CauHoiThi> CauHoiThis { get; set; }
        public virtual LopHoc LopHoc { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ThoiGianLamBai> ThoiGianLamBais { get; set; }

        DayHocTrucTuyenEntities db = new DayHocTrucTuyenEntities();
        public string setMa(string maLop)
        {
            var last = (from b in db.PhongThis
                        where b.Ma_Lop == maLop
                        orderby b.Ma_Phong descending
                        select b).FirstOrDefault();
            if (last == null)
            {
                return maLop + "-001";
            }
            int temp = int.Parse(Convert.ToString(last.Ma_Phong).Substring(12));
            string ma = maLop + "-" + Convert.ToString(1000 + temp + 1).Substring(1);
            return ma;
        }
        public string mahoaMatKhau(string pass)
        {
            MD5 mh = MD5.Create();
            byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(pass);
            byte[] hash = mh.ComputeHash(inputBytes);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < hash.Length; i++)
            {
                sb.Append(hash[i].ToString("X2"));
            }
            return sb.ToString();
        }
        public int getSLCauHoi(string maPhong)
        {
            return db.CauHoiThis.Where(x => x.Ma_Phong == maPhong).Count();
        }
        public int getSLThi(string maND, string maPhong)
        {
            return db.ThoiGianLamBais.Where(x => x.Ma_ND == maND && x.Ma_Phong == maPhong).Count();
        }
        public List<ThoiGianLamBai> getListThi(string maND, string maPhong)
        {
            return db.ThoiGianLamBais.Where(x => x.Ma_ND == maND && x.Ma_Phong == maPhong).ToList();
        }
        public int getSLLamBai(string maPhong)
        {
            return db.ThoiGianLamBais.Where(x => x.Ma_Phong == maPhong).Count();
        }
        public List<CauHoiThi> getAllCauHoi(string maPhong)
        {
            return db.CauHoiThis.Where(x => x.Ma_Phong == maPhong).ToList();
        }
        public bool daChonDapAn(int stt, string maphong, string maND, int lanthu)
        {
            var tl = db.CauTraLois.FirstOrDefault(x => x.STT == stt && x.Ma_Phong == maphong && x.Ma_ND == maND && x.Lan_Thu == lanthu);
            if (tl == null) return false;

            return true;
        }
        public string getDapAnDaChon(int stt, string maphong, string maND, int lanthu)
        {
            var tl = db.CauTraLois.FirstOrDefault(x => x.STT == stt && x.Ma_Phong == maphong && x.Ma_ND == maND && x.Lan_Thu == lanthu);

            return tl.Dap_An;
        }
        public int getDiemThi(string maND, string maPhong, int lanthu)
        {
            var pt = db.PhongThis.FirstOrDefault(x => x.Ma_Phong == maPhong);
            int diem = 0;
            for(int i = 1; i <= pt.getSLCauHoi(pt.Ma_Phong); i++)
            {
                var cauhoi = db.CauHoiThis.FirstOrDefault(x => x.STT == i && x.Ma_Phong == pt.Ma_Phong);
                var traloi = db.CauTraLois.FirstOrDefault(x => x.STT == i && x.Ma_Phong == pt.Ma_Phong && x.Ma_ND == maND && x.Lan_Thu == lanthu);
                if (traloi != null && traloi.Dap_An.Equals(cauhoi.Loi_Giai))
                {
                    diem++;
                }
            }
            return diem;
        }
        public List<PhongThi> searchPhongThi(string maND, string tenphong)
        {
            var phongthi = from pt in db.PhongThis
                           join lh in db.LopHocs on pt.Ma_Lop equals lh.Ma_Lop
                           where lh.Ma_ND == maND && pt.Ten_Phong.Contains(tenphong)
                           orderby pt.Ngay_Tao descending
                           select pt;
            return phongthi.ToList();
        }
    }
}