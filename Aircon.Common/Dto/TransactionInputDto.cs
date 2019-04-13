using System;
using System.Collections.Generic;
using System.Text;

namespace Aircon.Common.Dto
{
    public class TransactionInputDto
    {
        public int TransactionInputId { get; set; }
        public DateTime DateAdded { get; set; }
        public string DateAddedStr { get; set; }
        public double LowerBoundDiscount { get; set; }
        public double UpperBoundDiscount { get; set; }
        public double DiscountRate { get; set; }
        public decimal Amount { get; set; }
    }
}
