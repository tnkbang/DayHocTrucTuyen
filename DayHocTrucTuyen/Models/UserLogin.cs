using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DayHocTrucTuyen.Models
{
    public class UserLogin
    {
        public string MaUser { set; get; }
        public string Password { set; get; }
        public string HoLot { set; get; }
        public string Ten { set; get; }
        public string Image { set; get; }
        public string Loai { set; get; }
    }
}