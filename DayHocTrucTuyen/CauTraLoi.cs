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
    
    public partial class CauTraLoi
    {
        public int STT { get; set; }
        public string Ma_Phong { get; set; }
        public string Ma_ND { get; set; }
        public int Lan_Thu { get; set; }
        public string Dap_An { get; set; }
    
        public virtual CauHoiThi CauHoiThi { get; set; }
        public virtual NguoiDung NguoiDung { get; set; }
    }
}
