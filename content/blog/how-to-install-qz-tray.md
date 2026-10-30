---
title: "How to Install and Configure QZ Tray for Silent Printing in Qdine"
date: "2026-10-30"
excerpt: "Eliminate browser print popups and enable instant, one-tap KOT and customer bill printing. Follow this complete step-by-step guide to installing and configuring QZ Tray with Qdine POS."
coverImage: "/images/printset.png"
---

In a fast-paced restaurant environment, every second saved between table order punching, kitchen ticket firing, and bill settlement matters. Standard web browsers require a manual print preview dialog every time an order or invoice is printed—adding unnecessary friction, extra clicks, and potential delays for your cashier and waitstaff.

**QZ Tray** is a lightweight, secure background service that bridges modern cloud web applications like Qdine with your physical receipt and kitchen printers. By running silently in your operating system's background, QZ Tray enables **1-tap silent printing** directly to thermal POS printers (USB, Ethernet/LAN, Wi-Fi, or Bluetooth) without any browser dialogs or manual confirmations.

Here is the complete step-by-step walkthrough to get QZ Tray installed, running in your system tray, and connected to Qdine.

---

## Why Use QZ Tray with Qdine?

* **Zero Print Popups:** Orders and receipts print the instant you click or complete a transaction.
* **Instant Kitchen Order Tickets (KOTs):** Fired directly to kitchen stations the moment an order is punched.
* **Universal Hardware Compatibility:** Works seamlessly with standard 58mm and 80mm thermal printers (Epson, TVS, Star Micronics, Rongta, NGX, and standard ESC/POS hardware).
* **Multi-Station Support:** Designate any counter terminal or billing PC as the primary print station for your restaurant floor.

---

## Step 1: Download QZ Tray

1. Download the pre-configured QZ Tray installer for your billing PC directly using this link:  
   👉 **[Download QZ Tray Setup (Direct Download .exe)](https://pqmn2e8cqgprbrtd.public.blob.vercel-storage.com/QZTray-Setup.exe)**
2. Save the setup executable (`QZTray-Setup.exe`) to your system (e.g., in your Downloads folder or on your Desktop).

---

## Step 2: Run the Installation Wizard

Once the installer is downloaded to your machine:

1. Double-click the downloaded setup file (`QZTray-Setup.exe`) to start the setup wizard.
2. If prompted by Windows User Account Control (UAC), click **Yes** to grant installation permissions.
3. Review the license agreement and select your installation directory.
4. When you reach the **Select Additional Tasks** screen, ensure that **Create a Desktop shortcut** is checked. This ensures quick access whenever you need to restart or inspect the service.

![QZ Tray Setup Wizard - Select Additional Tasks](/images/setupo.png)

5. Click **Next**, and then click **Install**. The setup process takes only a few seconds to complete.

---

## Step 3: Verify QZ Tray Running in the System Tray

Once installation finishes, QZ Tray will launch automatically in the background.

1. Check your Windows Taskbar at the bottom right of your screen.
2. Click the **^** arrow to expand your hidden notification icons.
3. You will see the **QZ Tray icon** (a stylized green and white printer cube) sitting actively in your system tray.

![QZ Tray active in Windows System Tray notification area](/images/system-tray.png)

> **Pro Tip:** Right-click the QZ Tray icon in your system tray and verify that **Automatically Start** is checked. This ensures QZ Tray boots up seamlessly every time your computer turns on, so your billing staff never encounters disconnected print stations in the morning rush.

---

## Step 4: Configure Hardware Settings in Qdine

Now that QZ Tray is active on your machine, connect it inside your Qdine dashboard:

1. Log into your **Qdine POS** on your browser (Google Chrome or Microsoft Edge recommended).
2. Navigate to **Settings** > **Auto-Print & Hardware** (or access the POS hardware setup modal).
3. Toggle ON **"This device is the print station"**.
4. Toggle ON **"Auto-Print (KOT & Customer Bills)"**.
5. Qdine will automatically detect the local QZ Tray WebSocket bridge. Within a second, you will see a green status badge: **"QZ Tray Connected (X OS printers detected)"**.
6. Under the **Bill Printer** or **KOT Printer** section, select your connected printer device (e.g., *POS-80C*, *Thermal Receipt*, or your configured Network LAN IP).
7. Click the **Test Print** button to confirm a test slip prints cleanly from your hardware.
8. Click **Save** to lock in your configuration.

![Qdine POS Auto-Print and Hardware Configuration with QZ Tray](/images/printset.png)

---

## Step 5: Handling the One-Time Security Certificate Prompt

The first time Qdine communicates with QZ Tray, QZ Tray may display a security popup asking whether to allow `getqdine.com` to communicate with local hardware.

1. When the prompt appears on your screen, check the box: **"Remember this decision"** (or **"Always allow"**).
2. Click **Allow**.

Once remembered, you will never see this prompt again, and every subsequent order or bill will print silently in real time.

---

## Troubleshooting Common Questions

### 1. The status says "QZ Tray Disconnected"
* Open your Windows Start Menu, search for **QZ Tray**, and click to launch it.
* Check your system tray to ensure the green cube icon is visible.
* In Qdine, click **Detect Printers** to re-poll the hardware bridge.

### 2. My printer prints blank paper or garbled characters
* Ensure your thermal printer driver is configured to the correct paper width (80mm or 58mm).
* Verify that the printer has the correct ESC/POS or generic text driver selected in Windows Settings > Printers & Scanners.

### 3. Multiple Billing Terminals Printing to One Kitchen Printer
* If you have multiple tablets or POS terminals on your floor, choose one stable desktop PC connected via LAN to be the **Print Station**. Qdine will route tickets through that station without requiring local drivers on every handheld device.

---

## Ready to Elevate Your Floor Operations?

Setting up silent printing with QZ Tray transforms your checkout speed, reduces kitchen queue errors, and delivers the crisp, instantaneous service modern dining guests expect.

If you need any assistance getting your thermal printers or kitchen KOT setup dialed in, reach out to our support team at [support@getqdine.com](mailto:support@getqdine.com) or book an onboarding session through your dashboard.

