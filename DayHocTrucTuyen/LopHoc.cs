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
    using System.Text;

    public partial class LopHoc
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LopHoc()
        {
            this.BaiDangs = new HashSet<BaiDang>();
            this.DanhGiaLops = new HashSet<DanhGiaLop>();
            this.HocSinhThuocLops = new HashSet<HocSinhThuocLop>();
            this.PhongThis = new HashSet<PhongThi>();
            this.Tags = new HashSet<Tag>();
        }
    
        public string Ma_Lop { get; set; }
        public string Ma_ND { get; set; }
        public System.DateTime Ngay_Tao { get; set; }
        public string Ten_Lop { get; set; }
        public string Bi_Danh { get; set; }
        public string Mat_Khau { get; set; }
        public string Mo_Ta { get; set; }
        public bool Trang_Thai { get; set; }
        public string Img_Bia { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BaiDang> BaiDangs { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DanhGiaLop> DanhGiaLops { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<HocSinhThuocLop> HocSinhThuocLops { get; set; }
        public virtual NguoiDung NguoiDung { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PhongThi> PhongThis { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Tag> Tags { get; set; }

        DayHocTrucTuyenEntities db = new DayHocTrucTuyenEntities();
        private string randomString()
        {
            StringBuilder sb = new StringBuilder();
            char c;
            Random rand = new Random();
            for (int i = 0; i < 11; i++)
            {
                if (i == 3 || i == 7)
                {
                    sb.Append('-');
                }
                else
                {
                    c = Convert.ToChar(Convert.ToInt32(rand.Next(65, 87)));
                    sb.Append(c);
                }
            }
            return sb.ToString().ToLower();
        }
        public string setMa()
        {
            var ma = "";
            LopHoc temp;

            do
            {
                ma = randomString();
                temp = db.LopHocs.FirstOrDefault(x => x.Ma_Lop == ma);
            } while (temp != null);
            return ma;
        }
        public NguoiDung getOwner(string maLop)
        {
            LopHoc room = db.LopHocs.FirstOrDefault(x => x.Ma_Lop == maLop);
            NguoiDung temp = db.NguoiDungs.FirstOrDefault(x => x.Ma_ND == room.Ma_ND);
            NguoiDung user = new NguoiDung();

            user.Ma_ND = temp.Ma_ND;
            user.Ho_Lot = temp.Ho_Lot;
            user.Ten = temp.Ten;
            user.Img_Avt = temp.Img_Avt;
            user.Img_BG = temp.Img_BG;

            return user;
        }
        public int getSLPost(string maLop)
        {
            var sl = db.BaiDangs.Where(x => x.Ma_Lop == maLop).Count();
            return sl;
        }
        public List<BaiDang> getAllPost(string maLop)
        {
            List<BaiDang> lst = new List<BaiDang>();
            var ghim = from p in db.BaiDangs
                       join g in db.Ghims on p.Ma_Bai equals g.Ma_Bai
                       where p.Ma_Lop == maLop
                       orderby g.Thoi_Gian descending
                       select p;
            lst.AddRange(ghim);
            var notghim = db.BaiDangs.Where(x => x.Ma_Lop == maLop).Except(ghim).OrderByDescending(x => x.Thoi_Gian);
            lst.AddRange(notghim);

            return lst;
        }
        public List<PhongThi> getAllPhongThi(string malop)
        {
            return db.PhongThis.Where(x => x.Ma_Lop == malop).OrderByDescending(x => x.Ngay_Tao).ToList();
        }
        public int getSLCamXuc(string maLop)
        {
            var post = db.BaiDangs.Where(x => x.Ma_Lop == maLop);
            var count = 0;
            foreach (var p in post)
            {
                var cx = db.CamXucs.Where(x => x.Ma_Bai == p.Ma_Bai).Count();
                count += cx;
            }
            return count;
        }
        public int getMembers(string maLop)
        {
            var sl = db.HocSinhThuocLops.Where(x => x.Ma_Lop == maLop).Count();
            return sl;
        }
        public List<Tag> getTag(string maLop)
        {
            List<Tag> tag = db.Database.SqlQuery<Tag>("SELECT Tag.Ma_Tag, Tag.Ten_Tag FROM Tag INNER JOIN LopThuocTag ON Tag.Ma_Tag = LopThuocTag.Ma_Tag WHERE LopThuocTag.Ma_Lop = '" + maLop + "'").ToList();
            return tag;
        }
        public bool isTag(string maLop, string maTag)
        {
            var tag = db.Database.SqlQuery<Tag>("SELECT Tag.Ma_Tag, Tag.Ten_Tag FROM Tag INNER JOIN LopThuocTag ON Tag.Ma_Tag = LopThuocTag.Ma_Tag WHERE LopThuocTag.Ma_Lop = '" + maLop + "' AND LopThuocTag.Ma_Tag ='" + maTag + "'").Count();
            if (tag != 0) return true;
            return false;
        }
        //public string randomColorTag()
        //{
        //    string[] color = { "", "blu", "rad" };
        //    Random rand = new Random();
        //    return color[rand.Next(color.Length)];
        //}
        public List<NguoiDung> listMembers(string maLop)
        {
            var mem = from n in db.NguoiDungs
                      join hs in db.HocSinhThuocLops on n.Ma_ND equals hs.Ma_ND
                      where hs.Ma_Lop == maLop
                      orderby n.Ten
                      select n;
            foreach (var m in mem)
            {
                m.SDT = null;
                m.Mat_Khau = null;
                m.Email = null;
                m.Img_Nhan_Dien = null;
            }
            return mem.ToList();
        }
        public bool isOwner(string maUser, string maLop)
        {
            var own = db.LopHocs.FirstOrDefault(x => x.Ma_ND == maUser && x.Ma_Lop == maLop);
            if (own != null) { return true; }

            return false;
        }
        public bool isMember(string maUser, string maLop)
        {
            var mem = db.HocSinhThuocLops.FirstOrDefault(x => x.Ma_ND == maUser && x.Ma_Lop == maLop);
            if (mem != null) { return true; }

            return false;
        }
        public List<LopHoc> searchLopHoc(string maND, string tenlop)
        {
            List<LopHoc> lst = new List<LopHoc>();
            var thuoclop = from lh in db.LopHocs
                           join hstl in db.HocSinhThuocLops on lh.Ma_Lop equals hstl.Ma_Lop
                           where hstl.Ma_ND == maND && lh.Ten_Lop.Contains(tenlop)
                           orderby lh.Ngay_Tao descending
                           select lh;
            var sohuu = db.LopHocs.Where(x => x.Ma_ND == maND && x.Ten_Lop.Contains(tenlop)).OrderByDescending(x => x.Ngay_Tao);
            lst.AddRange(sohuu);
            lst.AddRange(thuoclop);

            return lst;
        }
    }
}
