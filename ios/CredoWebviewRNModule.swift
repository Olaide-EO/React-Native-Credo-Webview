//
//  CredoWebviewRNModule.swift
//  CredoWebviewRNModule
//
//  Copyright © 2021 Olaide Oladipo. All rights reserved.
//

import Foundation

@objc(CredoWebviewRNModule)
class CredoWebviewRNModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
