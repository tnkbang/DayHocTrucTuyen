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
    
    public partial class PhieuDanhGia
    {
        public string Ma_Phieu { get; set; }
        public string Ma_ND { get; set; }
        public string Chuc_Nang { get; set; }
        public int Muc_Do { get; set; }
        public string Ghi_Chu { get; set; }
    
        public virtual NguoiDung NguoiDung { get; set; }
    }
}
