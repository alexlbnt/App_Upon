# 📱 UPON – Aplicativo de Cupons de Desconto

Aplicativo mobile desenvolvido em **React Native (Expo)** para exibição e validação de **cupons de desconto de comércios locais**, com autenticação de usuários e validação via QR Code.

---

## 🚀 Sobre o Projeto

O **UPON** é um aplicativo onde:

* 🏪 Empresas cadastram seus cupons
* 👤 Usuários visualizam ofertas disponíveis
* 🎟️ Cupons são validados via QR Code no estabelecimento
* ❤️ Usuários podem favoritar ofertas
* 🛒 Possui sistema de carrinho
* 🔐 Autenticação controlada por contexto global

O objetivo é conectar consumidores a promoções locais de forma simples e segura.

---

## 🛠️ Tecnologias Utilizadas

### 📱 Mobile

* **React Native**
* **Expo**
* **TypeScript**
* **React Navigation**
* Context API (Auth, Cart, Favorites)

### 🖥️ Backend (Planejado / em desenvolvimento)

* **NestJS**
* **TypeScript**
* **PostgreSQL**

---

## 📂 Estrutura do Projeto

```
src/
 ├── contexts/
 │    ├── AuthContext.tsx
 │    ├── CartContext.tsx
 │    └── FavoritesContext.tsx
 │
 ├── navigation/
 │    ├── RootNavigator.tsx
 │    └── BottomTabNavigator.tsx
 │
 ├── screens/
 │    ├── auth/
 │    │    ├── LoginScreen.tsx
 │    │    └── RegisterScreen.tsx
 │    │
 │    ├── HomeScreen.tsx
 │    ├── ProfileScreen.tsx
 │    └── SplashScreen.tsx
 │
 ├── theme/
 │    └── colors.ts
 │
 └── App.tsx
```

---

## 🔐 Autenticação

O projeto utiliza um **AuthContext global** para controlar:

* Estado de autenticação
* Login
* Logout
* Proteção de rotas

### Fluxo atual:

* Sempre inicia na tela de **Login**
* Após autenticação → redireciona para o App
* Logout → retorna para Login
* Sessão **não é persistida automaticamente**

---

## 🧭 Navegação

Utiliza:

* `createNativeStackNavigator`
* `BottomTabNavigator`

### Estrutura:

```
RootNavigator
 ├── Login / Register (se não autenticado)
 └── App (Tabs) (se autenticado)
```

---

## ▶️ Como Rodar o Projeto

### 1️⃣ Instalar dependências

```bash
npm install
```

ou

```bash
yarn
```

---

### 2️⃣ Rodar o projeto

```bash
npx expo start
```

Depois:

* `w` → Web
* `a` → Android
* `i` → iOS

---

## 🎯 Funcionalidades Implementadas

* [x] Sistema de Login
* [x] Registro de usuário
* [x] Proteção de rotas
* [x] Navegação por Tabs
* [x] Sistema de Favoritos
* [x] Carrinho global
* [x] Splash Screen
* [ ] Integração com API
* [ ] Persistência de sessão
* [ ] Validação real por QR Code
* [ ] Painel administrativo para empresas

---

## 🧠 Arquitetura

O projeto segue uma arquitetura modular baseada em:

* Context API para estados globais
* Separação clara entre navegação e lógica
* Estrutura escalável para integração com backend
* Organização por domínio (auth, cart, favorites)

---

## 📌 Roadmap Futuro

* 🔐 Autenticação via JWT
* 🏢 Diferenciação entre usuário e estabelecimento
* 📊 Painel web administrativo
* 📡 Integração com NestJS
* 📷 Validação de cupom via QR Code
* 💳 Sistema de controle antifraude
* 🔄 Refresh Token
* 📍 Geolocalização de comércios

---

## 👨‍💻 Desenvolvido por

**Lopzzi Tech**

Projeto em evolução com foco em produto real e escalável.

---