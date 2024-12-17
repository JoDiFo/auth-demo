public void Check() 
{
    string connection = "";
    using (SqlConnection connection = new SqlConnection(connection))
    {
        Database db = new Database(connection);
        Datatable table = new Datatable();
        SqlCommand command = new SqlCommand("SELECT * FROM [Users] WHERE [login] = @l AND [password] = @p");
        SqlDataAdapter adapter = new SqlDataAdapter();
        connection.Open();
    }
}