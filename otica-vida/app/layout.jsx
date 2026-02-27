// 1. O nome da função pode ser qualquer um (RootLayout é o padrão)
// 2. O "export default" é OBRIGATÓRIO
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {/* Aqui você pode colocar o seu <Header /> */}
        {children}
      </body>
    </html>
  );
}