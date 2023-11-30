using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class Node
    {
        public string? name { get; set; }

        public string? type { get; set; }
        public Node[]? children { get; set; }
        public Node()
        {
            
        }
    }
}
