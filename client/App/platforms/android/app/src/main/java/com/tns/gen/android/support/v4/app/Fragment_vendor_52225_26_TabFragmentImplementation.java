/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.android.support.v4.app;

public class Fragment_vendor_52225_26_TabFragmentImplementation extends android.support.v4.app.Fragment implements com.tns.NativeScriptHashCodeProvider {
	public Fragment_vendor_52225_26_TabFragmentImplementation(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	public void onCreate(android.os.Bundle param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onCreate", void.class, args);
	}

	public android.view.View onCreateView(android.view.LayoutInflater param_0, android.view.ViewGroup param_1, android.os.Bundle param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		return (android.view.View)com.tns.Runtime.callJSMethod(this, "onCreateView", android.view.View.class, args);
	}

	public void onDestroyView()  {
		java.lang.Object[] args = null;
		com.tns.Runtime.callJSMethod(this, "onDestroyView", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
