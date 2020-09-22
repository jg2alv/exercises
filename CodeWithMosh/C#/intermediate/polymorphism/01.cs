using System;

namespace Polymorphism
{
    class Program1
    {
        public static void Main()
        {
            SqlConnection sqlc = new SqlConnection("SQL");
            OracleConnection oc = new OracleConnection("Oracle");

            sqlc.Open();
            oc.Open();

            sqlc.Close();
            oc.Close();
        }
    }
}