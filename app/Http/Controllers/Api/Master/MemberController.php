<?php

namespace App\Http\Controllers\Api\Master;

use App\Http\Controllers\Controller;
use App\Models\Member;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class MemberController extends Controller
{
    public function index(Request $request)
    {
        return $this->success(Member::filter($request)->get());
    }

    public function store(Request $request)
    {
        $this->validate($request, $this->rules(new Member));
        $member = new Member();
        $member->fill($request->all());
        $member->save();

        return $this->success([], "success creating items");
    }

    public function show(Member $member)
    {
        return $this->success($member);
    }

    public function update(Request $request, Member $member)
    {
        $this->validate($request, $this->rules($member));
        $member->fill($request->all());
        $member->update();

        return $this->success([], "success updating items");
    }

    public function destroy(Member $member)
    {
        $member->delete();

        return $this->success([], "success deleting items");
    }

    private function rules(?Member $member): array
    {
        return [
            "name" => ["required", "min:3"],
            "email" => [Rule::unique("members")->ignore($member->id)]
        ];
    }
}
