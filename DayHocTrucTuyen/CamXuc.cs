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
    
    public partial class CamXuc
    {
        public string Ma_ND { get; set; }
        public string Ma_Bai { get; set; }
        public System.DateTime Thoi_Gian { get; set; }
    
        public virtual BaiDang BaiDang { get; set; }
        public virtual NguoiDung NguoiDung { get; set; }
    }
}