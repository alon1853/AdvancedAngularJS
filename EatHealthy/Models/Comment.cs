using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EatHealthy.Models
{
    public class Comment
    {
        public int ID { get; set; }

        [Required]
        [ForeignKey("Client")]
        public int ClientID { get; set; }

        [Required]
        [ForeignKey("Post")]
        public int PostID { get; set; }

        [Required]
        public string Content { get; set; }

        [DataType(DataType.Date)]
        [DisplayName("Created at")]
        public DateTime CreationDate { get; set; }

        public virtual Post Post { get; set; }

        public virtual Client Client { get; set; }
    }
}