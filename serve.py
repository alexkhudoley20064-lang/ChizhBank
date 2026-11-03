#!/usr/bin/env python3
"""
Скрипт для мгновенного локального запуска и тестирования игры в браузере.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Отключаем агрессивный кэш браузера при разработке
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    print("=" * 60)
    print("🏧 Запуск локального сервера игры 'Банкомат: Кэш-Магнат'")
    print("=" * 60)
    print(f"👉 Игра доступна по адресу: http://localhost:{PORT}")
    print("💡 Совет: В браузере нажмите F12 (или Cmd+Option+I на Mac) и")
    print("   переключитесь в режим мобильного экрана (Device Toolbar).")
    print("=" * 60)
    
    # Открываем браузер автоматически
    webbrowser.open(f"http://localhost:{PORT}")
    
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nСервер остановлен.")

if __name__ == "__main__":
    main()
