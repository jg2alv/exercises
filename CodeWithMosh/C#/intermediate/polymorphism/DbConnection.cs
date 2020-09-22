using System;

namespace Polymorphism
{
    abstract class DbConnection
    {
        private string _connectionString;

        public abstract void Open();
        public abstract void Close();

        protected DbConnection(string connectionString)
        {
            if (string.IsNullOrWhiteSpace(connectionString)) throw new FormatException("Connection string must be valid");
            this._connectionString = connectionString;
        }
    }
}