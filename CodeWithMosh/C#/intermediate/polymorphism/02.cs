using System;

namespace Polymorphism
{
    class Program2
    {
        public static void Main()
        {
            SqlConnection sqlc = new SqlConnection("SQL");
            OracleConnection oc = new OracleConnection("Oracle");

            DbCommand sqldbc = new DbCommand(sqlc, "SELECT * FROM `users`");
            DbCommand odbc = new DbCommand(oc, "SELECT `field` FROM `table`");

            sqldbc.Execute();
            odbc.Execute();
        }
    }
}